#!/bin/bash

# Raspberry Pi
# Manjaro ARM Linux aarch64
# Author: Bogachenko Vyacheslav <bogachenkove@gmail.com>

TELLUSER=$(echo $USER)

# Clear the console.
clear

# Getting root permission.
su

# Installing Russian localization for the system.
cat > /etc/vconsole.conf <<EOF
FONT=ter-k16n
KEYMAP=ru
EOF
cat > /etc/locale.gen <<EOF
ru_RU.UTF-8 UTF-8
en_US.UTF-8 UTF-8
EOF
locale-gen
setfont ter-k16n
localectl set-locale LANG="ru_RU.UTF-8"
cat > /etc/X11/xorg.conf.d/00-keyboard.conf <<EOF
Section "InputClass"
        Identifier "system-keyboard"
        MatchIsKeyboard "on"
        Option "XkbLayout" "us,ru"
        Option "XkbModel" "pc105"
        Option "XkbVariant" ""
        Option "XkbOptions" "grp:alt_shift_toggle"
EndSection
EOF

# Refresh mirrors for Pacman.
cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
pacman-mirrors --country Russia

# Updating repository data and installing updates.
pacman -Syyuu

# Installing main packages.
pacman -S --needed zsh git vim htop neofetch net-tools tor privoxy cmake pkgconf make iw base-devel wget ttf-ubuntu-font-family ttf-dejavu ttf-liberation netctl gparted openresolv xorg-drivers xorg-server ranger code firefox-i18n-ru firefox xorg-xinit jack2 noto-fonts noto-fonts-emoji sddm dmenu i3-wm scrot xorg-xsetroot i3status gvfs dhclient alsa-plugins alsa-utils pulseaudio nyx vlc noto-fonts-cjk xorg-xrdb speedtest-cli xdg-user-dirs gtk2 gtk3 gtk4 dhcpcd xdg-utils xautolock pavucontrol hostapd xorg-apps dnsmasq rxvt-unicode unzip i3lock ppp bluez bluez-untils ttf-fira-code ttf-fira-mono mathjax youtube-dl pcmanfm-qt python2 python create_ap ttf-carlito ttf-caladea ttf-croscore libevent perl xorg-xclock xorg-xmodmap npm nodejs terminus-font mesa mesa-demos qt5ct pwgen imagemagick dunst libjpeg-turbo capitaine-cursors breeze-icons chromium yajl zip unrar p7zip bzip2 lrzip lz4 lzop xz zstd arj lhasa lxqt-archiver onboard uget

# Setting a parameter for QT.
cat > /etc/environment <<EOF
QT_QPA_PLATFORMTHEME="qt5ct"
EOF

# Installing the theme.
cat > /usr/share/gtk-2.0/gtkrc <<EOF
gtk-icon-theme-name="Breeze"
gtk-theme-name="Adwaita"
gtk-cursor-theme-name="capitaine-cursors-light"
gtk-font-name="Noto Sans 9"
gtk-menu-images=0
gtk-button-images=0
gtk-enable-event-sounds=0
gtk-enable-input-feedback-sounds=0
gtk-xft-antialias=1
gtk-xft-hinting=1
gtk-xft-hintstyle="hintslight"
gtk-xft-rgba="rgb"
EOF
cat > /usr/share/gtk-3.0/settings.ini <<EOF
[Settings]
gtk-icon-theme-name=Breeze
gtk-theme-name=Adwaita
gtk-cursor-theme-name=capitaine-cursors-light
gtk-font-name=Noto Sans 9
gtk-menu-images=0
gtk-button-images=0
gtk-enable-event-sounds=0
gtk-enable-input-feedback-sounds=0
gtk-xft-antialias=1
gtk-xft-hinting=1
gtk-xft-hintstyle=hintslight
gtk-xft-rgba=rgb
EOF
cat > /usr/share/gtk-4.0/settings.ini <<EOF
[Settings]
gtk-icon-theme-name=Breeze
gtk-theme-name=Adwaita
gtk-cursor-theme-name=capitaine-cursors-light
gtk-font-name=Noto Sans 9
gtk-menu-images=0
gtk-button-images=0
gtk-enable-event-sounds=0
gtk-enable-input-feedback-sounds=0
gtk-xft-antialias=1
gtk-xft-hinting=1
gtk-xft-hintstyle=hintslight
gtk-xft-rgba=rgb
EOF
mkdir -p ~/.config/gtk-{3.0,4.0}/
chown $TELLUSER:$TELLUSER ~/.config/gtk-{3.0,4.0}/
cp /usr/share/gtk-2.0/gtkrc ~/.gtkrc-2.0
cp /usr/share/gtk-3.0/settings.ini ~/.config/gtk-3.0/settings.ini
cp /usr/share/gtk-4.0/settings.ini ~/.config/gtk-4.0/settings.ini

# Automatic login.
cat > /etc/sddm.conf <<EOF
[Autologin]
User=$TELLUSER
Session=i3.desktop
EOF

# Setting the Hackneyed cursor by default.
cat > /usr/share/icons/default/index.theme <<EOF
[Icon Theme] 
Inherits=capitaine-cursors-light
EOF

# Convert SOCKS to HTTP proxy via Privoxy.
echo "forward-socks5 / localhost:9050 ." >> /etc/privoxy/config
echo "forward-socks4 / localhost:9050 ." >> /etc/privoxy/config
echo "forward-socks4a / localhost:9050 ." >> /etc/privoxy/config

# Change the shell.
chsh -s /bin/zsh $TELLUSER
chsh -s /bin/zsh root

# Exiting superuser mode.
exit

# Create user directories.
xdg-user-dirs-update

# Configuring the Xresources file.
cat > ~/.Xresources <<EOF
Xft.dpi: 96
Xft.antialias: 1
Xft.hinting: 1
Xft.rgba: rgb
Xft.autohint: 0
Xft.hintstyle: hintslight
Xft.lcdfilter: lcddefault

URxvt.iso14755: false
URxvt.iso14755_52: false
URxvt.clipboard.autocopy: true
URxvt.keysym.Shift-Control-V: eval:paste_clipboard
URxvt.keysym.Shift-Control-C: eval:selection_to_clipboard
URxvt.scrollBar: false
URxvt.background: #000000
URxvt.foreground: #ffffff
URxvt.font: xft:Fira Mono:regular:size=10
URxvt.boldFont: xft:Fira Mono:bold:size=10
URxvt.italicFont: xft:Fira Mono:italic:size=10
URxvt.boldItalicFont: xft:Fira Mono:bold:italic:size=10
URxvt.geometry: 150x30
URxvt.scrollTtyOutput: false
URxvt.cursorBlink: true
EOF
xrdb -merge ~/.Xresources

# Installing the AUR repository.
cd /tmp
git clone https://aur.archlinux.org/package-query.git
cd package-query/
makepkg -si
cd ..
git clone https://aur.archlinux.org/yaourt.git
cd yaourt/
makepkg -si
cd /tmp/

# Installing the BlackArch repository.
curl -O https://blackarch.org/strap.sh
chmod +x strap.sh
sudo ./strap.sh

# Updating system data.
yaourt -Syua

# Installing main packages from the AUR repository.
yaourt -S peerflix

# Installing my user.js file in Firefox.
cd /tmp
curl -o user.js https://raw.githubusercontent.com/bogachenko/lib/master/mozilla/firefox-user.js
mv /tmp/user.js ~/.mozilla/firefox/$TELLUSER/user.js

# Downloading and installing Adguard Home.
curl -s -S -L https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v

# Enabling daemons and starting them for my main packages.
sudo systemctl enable tor.service && sudo systemctl start tor.service
sudo systemctl enable privoxy.service && sudo systemctl start privoxy.service
sudo systemctl enable sshd.service && sudo systemctl start sshd.service
sudo systemctl enable gpm.service && sudo systemctl start gpm.service
sudo systemctl enable sddm.service && sudo systemctl start sddm.service
sudo systemctl enable dhcpcd.service && sudo systemctl start dhcpcd.service
sudo systemctl enable hostapd.service && sudo systemctl start hostapd.service
sudo systemctl enable dnsmasq.service && sudo systemctl start dnsmasq.service
sudo systemctl enable bluetooth.service && sudo systemctl start bluetooth.service

# Fill in the information for GECOS.
sudo chfn $TELLUSER

# Configuring i3wm and i3status.
mkdir -p ~/.config/i3status
cat > ~/.config/i3status/config <<EOF
general {
        output_format = "i3bar"
        colors = true
        color_good = "#00FF00"
        color_degraded = "#FFFF00"
        color_bad = "#FF0000"
        interval = 1
}

order += "ipv6"
order += "wireless _first_"
order += "ethernet _first_"
order += "disk /"
order += "load"
order += "memory"
order += "tztime local"

wireless _first_ {
        format_up = "W: (%quality at %essid) %ip"
        format_down = "W: down"
}

ethernet _first_ {
        format_up = "E: %ip (%speed)"
        format_down = "E: down"
}

disk "/" {
        format = "D: %avail"
}

load {
        format = "L: %1min"
}

memory {
        format = "M: %used - %available"
        threshold_degraded = "1G"
        format_degraded = "MEMORY < %available"
}

tztime local {
        format = "%a %d %B %Y, %H:%M:%S"
}
EOF
cat > ~/.config/i3/config <<EOF
set $mod Mod4
font pango:Noto Sans Medium 9
exec --no-startup-id xss-lock --transfer-sleep-lock -- i3lock --nofork
set $refresh_i3status killall -SIGUSR1 i3status
bindsym XF86AudioRaiseVolume exec --no-startup-id pactl set-sink-volume @DEFAULT_SINK@ +10% && $refresh_i3status
bindsym XF86AudioLowerVolume exec --no-startup-id pactl set-sink-volume @DEFAULT_SINK@ -10% && $refresh_i3status
bindsym XF86AudioMute exec --no-startup-id pactl set-sink-mute @DEFAULT_SINK@ toggle && $refresh_i3status
bindsym XF86AudioMicMute exec --no-startup-id pactl set-source-mute @DEFAULT_SOURCE@ toggle && $refresh_i3status
floating_modifier $mod
bindsym $mod+Return exec urxvt
bindsym $mod+Shift+q kill
bindsym $mod+d exec "dmenu_run -nf '#BEBEBE' -nb '#000000' -sb '#1000C0' -sf '#FFFFFF' -fn 'Noto Sans Medium-9'
bindsym $mod+j focus left
bindsym $mod+k focus down
bindsym $mod+l focus up
bindsym $mod+semicolon focus right
bindsym $mod+Left focus left
bindsym $mod+Down focus down
bindsym $mod+Up focus up
bindsym $mod+Right focus right
bindsym $mod+Shift+j move left
bindsym $mod+Shift+k move down
bindsym $mod+Shift+l move up
bindsym $mod+Shift+semicolon move right
bindsym $mod+Shift+Left move left
bindsym $mod+Shift+Down move down
bindsym $mod+Shift+Up move up
bindsym $mod+Shift+Right move right
bindsym $mod+h split h
bindsym $mod+v split v
bindsym $mod+f fullscreen toggle
bindsym $mod+s layout stacking
bindsym $mod+w layout tabbed
bindsym $mod+e layout toggle split
bindsym $mod+Shift+space floating toggle
bindsym $mod+space focus mode_toggle
bindsym $mod+a focus parent
set $ws1 "1"
set $ws2 "2"
set $ws3 "3"
set $ws4 "4"
set $ws5 "5"
set $ws6 "6"
set $ws7 "7"
set $ws8 "8"
set $ws9 "9"
set $ws10 "10"
bindsym $mod+1 workspace number $ws1
bindsym $mod+2 workspace number $ws2
bindsym $mod+3 workspace number $ws3
bindsym $mod+4 workspace number $ws4
bindsym $mod+5 workspace number $ws5
bindsym $mod+6 workspace number $ws6
bindsym $mod+7 workspace number $ws7
bindsym $mod+8 workspace number $ws8
bindsym $mod+9 workspace number $ws9
bindsym $mod+0 workspace number $ws10
bindsym $mod+Shift+1 move container to workspace number $ws1
bindsym $mod+Shift+2 move container to workspace number $ws2
bindsym $mod+Shift+3 move container to workspace number $ws3
bindsym $mod+Shift+4 move container to workspace number $ws4
bindsym $mod+Shift+5 move container to workspace number $ws5
bindsym $mod+Shift+6 move container to workspace number $ws6
bindsym $mod+Shift+7 move container to workspace number $ws7
bindsym $mod+Shift+8 move container to workspace number $ws8
bindsym $mod+Shift+9 move container to workspace number $ws9
bindsym $mod+Shift+0 move container to workspace number $ws10
bindsym $mod+Shift+c reload
bindsym $mod+Shift+r restart
bindsym $mod+Shift+e exec "i3-nagbar -t warning -m 'You pressed the exit shortcut. Do you really want to exit i3? This will end your X session.' -B 'Yes, exit i3' 'i3-msg exit'"
mode "resize" {
        bindsym j resize shrink width 10 px or 10 ppt
        bindsym k resize grow height 10 px or 10 ppt
        bindsym l resize shrink height 10 px or 10 ppt
        bindsym semicolon resize grow width 10 px or 10 ppt
        bindsym Left resize shrink width 10 px or 10 ppt
        bindsym Down resize grow height 10 px or 10 ppt
        bindsym Up resize shrink height 10 px or 10 ppt
        bindsym Right resize grow width 10 px or 10 ppt
        bindsym Return mode "default"
        bindsym Escape mode "default"
        bindsym $mod+r mode "default"
}
bindsym $mod+r mode "resize"
client.focused          #4C7899 #285577 #FFFFFF #2E9EF4   #285577
client.focused_inactive #333333 #5F676A #FFFFFF #484E50   #5F676A
client.unfocused        #333333 #222222 #888888 #292D2E   #222222
client.urgent           #2F343A #900000 #FFFFFF #900000   #900000
client.placeholder      #000000 #0C0C0C #FFFFFF #000000   #0C0C0C
client.background       #FFFFFF
bar {
        status_command i3status
colors {
    background #000000
    statusline #FFFFFF
    separator  #666666

    focused_workspace  #4C7899 #285577 #FFFFFF
    active_workspace   #333333 #222222 #FFFFFF
    inactive_workspace #333333 #222222 #888888
    urgent_workspace   #2F343A #900000 #FFFFFF
    binding_mode       #2F343A #900000 #FFFFFF
        }
}
exec_always --no-startup-id xsetroot -solid "#003760"
EOF

# Setting up the configuration for my VIM
cat > ~/.vimrc <<EOF
set number
syntax on
set noswapfile
set wrap
set ttyfast
set encoding=utf8
EOF
sudo cp ~/.vimrc /root/.vimrc

# ZSH Generator.
cat > ~/.zshrc <<EOF
PROMPT="%F{34}%n%f%F{34}@%f%F{34}%m%f:%F{21}%~%f$ "

export BROWSER="firefox"
export EDITOR="vim"
export XDG_CONFIG_HOME="$HOME/.config"

alias ls='ls -la'
alias reboot='sudo reboot'
alias updXres='xrdb -merge ~/.Xresources'
alias pac='sudo pacman'
alias unlockpac='sudo rm -f /var/lib/pacman/db.lck'
alias updsys='sudo pacman -Syu'
alias vi='vim'
alias c='clear'
alias wifi-router='sudo create_ap wlan0 eth0 localhost N7GZiMD!2ZTaZWYj0mLV'
alias code="code --user-data-dir /home/$TELLUSER/.config/Code/"

EOF
sudo cat > /root/.zshrc <<EOF
PROMPT="%F{9}%n%f%F{9}@%f%F{9}%m%f:%F{21}%~%f# "

export BROWSER="firefox"
export EDITOR="vim"
export XDG_CONFIG_HOME="$HOME/.config"

alias ls='ls -la'
alias pac='pacman'
alias unlockpac='rm -f /var/lib/pacman/db.lck'
alias updsys='pacman -Syu'
alias vi='vim'
alias c='clear'
alias wifi-router='create_ap wlan0 eth0 localhost N7GZiMD!2ZTaZWYj0mLV'
alias code="code --user-data-dir /home/$TELLUSER/.config/Code/"

EOF

# Removing debris.
sudo rm -rf /root/.bash_history /root/.bashrc /root/.bash_logout /root/.bash_profile /root/.bash_functions /root/.bash_aliases ~/.bashrc ~/.bash_history ~/.bash_logout ~/.cache/thumbnails ~/.bash_profile ~/.bash_functions ~/.bash_aliases /tmp/* ~/.local/share/Trash/*
sudo pacman -Scc
sudo paccache -r

# Clear the console.
clear

# Reboot
sudo reboot

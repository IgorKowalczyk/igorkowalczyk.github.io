export ZSH=$HOME/.oh-my-zsh

ZSH_THEME="gentoo"

plugins=(git git-extras npm zsh-autosuggestions zsh-syntax-highlighting)

source $ZSH/oh-my-zsh.sh
source $ZSH/custom/plugins/zsh-autosuggestions
source $ZSH/custom/plugins/zsh-syntax-highlighting
fpath+=${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}/plugins/zsh-completions/src

DISABLE_AUTO_UPDATE=true
DISABLE_UPDATE_PROMPT=true

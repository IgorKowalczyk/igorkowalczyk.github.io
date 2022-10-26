# [Choice] Node.js version: 16, 14, 12 (overriden in .devcontainer)
ARG VARIANT="16-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# Configure apt
ENV DEBIAN_FRONTEND=noninteractive

# Installing additional OS Packages
RUN apt-get update \
    && apt-get -y install --no-install-recommends \
    curl \
    git-core \
    gnupg \
    locales \
    zsh \
    wget \
    build-essential \
    procps \
    file \
    tree \
    jq \
    fonts-powerline \
    && locale-gen en_US.UTF-8 && fc-cache -vf

ENV DEBIAN_FRONTEND=dialog
ENV SHELL=/bin/zsh

ARG USER="node"
ARG GROUP="node"

USER ${USER}

# Make variables available in Shell Env
ENV USER=${USER}
ENV GROUP=${GROUP}

# Install Oh-my-ZSH
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true

# Install zsh-autosuggestions
RUN git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# Install zsh-syntax-highlighting
RUN git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# Install zsh-completions
RUN git clone https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}/plugins/zsh-completions

ADD --chown=${USER}:${GROUP} .zshrc /home/${USER}

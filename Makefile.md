# Makefile

Is typically used to write short forms for really long scripts

-include .env will import from environment file

:; for single line command

: for multi line commands

.PHONY: all test clean ... => Indicates these keywords are not folders

DEFAULT_ANVIL_KEY => Default Anvil Private Jey set Up

make help => for creating custom help commands

```

all: clean remove install update build

will clean repo, remove git modules, install dependciest, update forge and build

```
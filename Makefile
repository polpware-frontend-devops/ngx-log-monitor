# deployment


BuildDist := ./dist/$(Project)
BuildTarget := $(Project)
DeployTarget := ./deployment/$(Project)

include Makefile.deployment

IMG_TAG_DEBUG=docker-dev-boilerplate/tests-healthcheck:debug

# Docker sync
dss:
	docker-sync start

dsst:
	docker-sync clean && docker-sync stop

# Docker Compose
dcup:
	USER_ID=$(id -u) \
	USER_GID=$(id -g) \
	docker-compose \
		-f docker-compose.yml \
		-f docker-compose-dev.yml \
		up

dcd:
	docker-compose down

dclg:
	docker-compose logs

# Docker
db:
	docker build -t $(IMG_TAG_DEBUG) docker/debug

dpsa:
	docker ps -a

# High level commands
up: dsst dss dcup
down: dcd dsst
# Docker sync
dss:
	docker-sync start

dsst:
	docker-sync clean && docker-sync stop

# Docker Compose
dcup:
	docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d

dcd:
	docker-compose down

# Docker
dpsa:
	docker ps -a

# High level commands
up: dss dcup
down: dcd dsst
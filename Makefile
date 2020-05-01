default: start

start:
	docker-compose run --service-ports dev

test:
	docker-compose run -e "CI=false" test yarn jest ${PARAMS}

shell:
	docker-compose run dev sh

build-image:
	docker-compose build dev

remove-image: compose-down
	docker rmi dev

rebuild-image: remove-image build-image

serve-dev: compose-down
	docker-compose run --service-ports dev sh -c "yarn build && serve -p 4001 -s build"

serve-staging: compose-down
	docker-compose run --service-ports staging

serve-production: compose-down
	docker-compose run --service-ports production

tsc:
	docker-compose run -e "CI=false" test yarn tsc

tslint:
	docker-compose run -e "CI=false" test yarn tslint

sasslint:
	docker-compose run -e "CI=false" test yarn sasslint

lint: tslint sasslint

lintsc: lint tsc

compose-down:
	docker-compose down --remove-orphans

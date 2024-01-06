build:
	docker compose build
up:
	docker compose up

start:
	@make build
	@make up

create-app:
	@make build
	docker compose run --rm app sh -c "npx create-react-app ."

npm-install:
	docker compose run --rm app sh -c "npm install"

npm-install-%:
	docker compose run --rm app sh -c "npm install ${@:npm-install-%=%}"

app-%:
	docker compose run --rm app sh -c "${@:app-%=%}"


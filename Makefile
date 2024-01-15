include .env

.PHONY: all

build:
	docker build -t urcuchillay-chat .

run:
	export $(cat .env | xargs)
	docker stop urcuchillay-chat || true && docker rm urcuchillay-chat || true
	docker run --name urcuchillay-chat --rm -e OPENAI_API_KEY=${OPENAI_API_KEY} -p 3000:3000 urcuchillay-chat

logs:
	docker logs -f urcuchillay-chat

push:
	docker tag urcuchillay-chat:latest ${DOCKER_USER}/urcuchillay-chat:${DOCKER_TAG}
	docker push ${DOCKER_USER}/urcuchillay-chat:${DOCKER_TAG}

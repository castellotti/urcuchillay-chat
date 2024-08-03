# [Urcuchillay Chat](http://chat.urcuchillay.ai)

"Ur-koo-CHEE-lye"

## Your friendly, local AI chat interface

![User Interface](docs/images/urcuchillay-chatbot_ui.png)

Urcuchillay Chat is a web-based chat interface for [Urcuchillay AI](http://urcuchillay.ai) in the style of OpenAI's ChatGPT, based on [Chatbot UI](https://github.com/mckaywrigley/chatbot-ui).

<div style="text-align:center;">
  <img src="docs/images/urcuchillay-header.webp" alt="Urcuchillay" width="480"/>
</div>

In the Incan religion, Urcuchillay was depicted as a multicolored male llama, worshipped by Incan herders for his role in protecting and increasing the size of their herds.

## Quickstart Guide
*Note*: In the following examples Urcuchillay AI's [gateway](https://github.com/castellotti/urcuchillay#gateway) service or another OpenAI API-compatible service (such as [Llama.cpp](https://github.com/ggerganov/llama.cpp)) is running on port `8080`, see [example](#Server) below
### Docker

#### Pull from GitHub Container Registry ####
```shell
docker run \
    --add-host=host.docker.internal:host-gateway \
    -e API_HOST=http://host.docker.internal:8080 \
    -p 3000:3000 \
    ghcr.io/castellotti/urcuchillay-chat:main
```

#### Build and run locally ####
```shell
docker build -t urcuchillay-chat .
docker run \
    --add-host=host.docker.internal:host-gateway \
    -e API_HOST=http://host.docker.internal:8080 \
    -p 3000:3000 \
    urcuchillay-chat
```

### Local

1. Clone repository

```shell
git clone https://github.com/castellotti/urcuchillay-chat.git
```

2. Install dependencies

```shell
npm i
```

3. *Optional*: Provide OpenAI API Key in configuration file

Create a .env.local file in the root of the repo with your OpenAI API Key (default is "`xxxxxxxx`" for local LLMs):

```shell
OPENAI_API_KEY=YOUR_KEY
```

4. Run App

```shell
npm run dev
```

5. Open Web Chat UI in a browser:
- [http://localhost:3000](http://localhost:3000)

#### Server

*Note*: The above assumes a LLM API service is already available, such as [Urcuchillay AI](https://github.com/castellotti/urcuchillay), or [Llama.cpp](https://github.com/ggerganov/llama.cpp/) (a host IP of `0.0.0.0` will be accessible to the Docker container):

Example:
```shell
./llama-server \
        --host 0.0.0.0 \
        --port 8080 \
        --model models/mistralai/mixtral-8x7b/mixtral-8x7b-instruct-v0.1.Q5_K_M.gguf
```

import {Message} from "../modules/messages.js";

export async function getMessages() {
    const response = await fetch("api/messages", {method: "GET"});
    const messageObjects = await response.json();
    return messageObjects.map(messageObj => Message.fromJSON(messageObj));
}
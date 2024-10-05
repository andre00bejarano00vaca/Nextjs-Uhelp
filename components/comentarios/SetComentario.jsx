"use client";
import React, { useState, useEffect, Suspense } from "react";
import * as StompJs from "@stomp/stompjs";
import GetComentarios from "@/components/comentarios/GetComentarios";
import { ScrollShadow,Input,Button } from "@nextui-org/react";
import { SkeletonComp } from "./SkeletonComp.jsx";

const ChatComponent = ({ id }) => {
  const [stompClient, setStompClient] = useState(null);
  const [greetings, setGreetings] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const client = new StompJs.Client({
      brokerURL: "wss://uhelp-api-springboot-production.up.railway.app/chats",
      onConnect: (frame) => {
        client.subscribe(`/topic/greetings/${id}`, (greeting) => {
          const message = JSON.parse(greeting.body).content;
          setGreetings((prevGreetings) => [...prevGreetings, message]);
        });
      },
      onWebSocketError: (error) => {
        console.error("Error with websocket", error);
      },
      onStompError: (frame) => {
        console.error("Broker reported error: " + frame.headers["message"]);
        console.error("Additional details: " + frame.body);
      },
    });

    setStompClient(client);
    client.activate(); // Activar la conexión automáticamente

    return () => {
      if (client) {
        client.deactivate();
      }
    };
  }, [id]); // Agregamos id como dependencia para reconectar si cambia

  const sendName = () => {
    if (stompClient && name) {
      stompClient.publish({
        destination: `/app/hello/${id}`,
        body: JSON.stringify({
          docenteId: id,
          texto: name,
        }),
      });
    }
    setName("");
  };
  //NEXTJS UI INPUT
  const [value, setValue] = React.useState("junior2nextui.org");
  const maxLength = 500;

  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);
///// NEXTUI INPUT
  return (
    <div>
      <div className="flex flex-nowrap justify-center">
      <Input
      value={name}
      type="text"
      label="Escribe tu comentario"
      variant="bordered"
      isInvalid={isInvalid}j
      maxLength={maxLength}
      color={isInvalid ? "danger" : "danger"}
      errorMessage={`(${name.length}/${maxLength})`}
      onValueChange={setValue}
      onChange={(e) => setName(e.target.value)}
      className="max-w-xs break-words"
    />
    <Button className="mt-2" onClick={sendName} color="warning">
        Enviar
      </Button> 
      </div>
      <div className="max-w-2xl mx-auto my-8">
        <div className="  shadow-md space-y-4">
          <ScrollShadow className="max-w-2xl h-[400px]">
            <div className="flex flex-col-reverse">
              {greetings.map((data, index) => (
                <div 
                key={index} 
                className="backdrop-blur-sm bg-zinc-800 text-orange-400 mb-2 p-4 rounded-md font-bold break-words"
              >
                {data}
              </div>
              ))}
            </div>
            <Suspense fallback={<SkeletonComp/>}>
              <GetComentarios id={id} />
            </Suspense>
          </ScrollShadow>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;

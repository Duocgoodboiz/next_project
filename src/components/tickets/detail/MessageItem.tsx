import React from "react";
import { Paperclip } from "lucide-react";
import { TicketMessage } from "@/lib/types/ticket";

interface MessageItemProps {
  message: TicketMessage;
}

export const MessageItem = ({ message }: MessageItemProps) => {
  const isMe = message.senderRole === "customer";

  return (
    <div className={`flex gap-5 ${isMe ? "flex-row-reverse" : ""}`}>
      {/* 1.25x: Avatar w-10 -> w-12 */}
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-base font-bold shadow-sm border border-transparent
          ${
            isMe
              ? "bg-(--erp-primary) text-white"
              : "bg-white text-(--erp-text-sub) border-(--erp-border)"
          }`}
      >
        {isMe ? "You" : message.senderName.charAt(0).toUpperCase()}
      </div>

      <div
        className={`flex flex-col max-w-[85%] ${
          isMe ? "items-end" : "items-start"
        }`}
      >
        <div className="flex items-center gap-3 mb-1.5 px-1">
          {/* 1.25x: text-sm -> text-base */}
          <span className="text-base font-semibold text-(--erp-text-main)">
            {message.senderName}
          </span>
          {/* 1.25x: text-xs -> text-sm */}
          <span className="text-sm text-(--erp-text-sub)">
            {message.timestamp}
          </span>
        </div>

        <div
          className={`px-6 py-4 rounded-2xl text-lg leading-relaxed shadow-sm border
            ${
              isMe
                ? "bg-(--erp-primary) text-white border-transparent rounded-tr-none"
                : "bg-white text-(--erp-text-main) border-(--erp-border) rounded-tl-none"
            }`}
        >
          {/* 1.25x: text-[15px] -> text-lg (khoảng 18px) */}
          <p className="whitespace-pre-wrap">{message.content}</p>

          {/* Attachments */}
          {message.attachments && message.attachments.length > 0 && (
            <div className="mt-3 pt-3 border-t border-white/20">
              {message.attachments.map((file, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 text-base cursor-pointer hover:underline opacity-90 ${
                    isMe ? "text-white" : "text-(--erp-primary)"
                  }`}
                >
                  <Paperclip size={18} />
                  {file.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Paperclip, Send } from "lucide-react";
import { Button } from "@/components/common/Button";

interface ReplyBoxProps {
  value: string;
  onChange: (val: string) => void;
  onSend: () => void;
}

export const ReplyBox = ({ value, onChange, onSend }: ReplyBoxProps) => {
  return (
    <div className="p-6 bg-white border-t border-(--erp-border)">
      <div className="flex flex-col gap-4">
        <textarea
          // 1.25x: h-24 -> h-28, text-sm -> text-base
          className="w-full h-28 p-4 bg-gray-50 border border-(--erp-border) rounded-xl text-base focus:outline-none focus:ring-1 focus:ring-(--erp-primary) focus:border-(--erp-primary) transition-all resize-none placeholder:text-(--erp-text-placeholder) text-(--erp-text-main)"
          placeholder="Type your message..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
        />
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 text-base text-(--erp-text-sub) hover:text-(--erp-text-main) px-3 py-2 rounded hover:bg-gray-100 transition-colors">
            <Paperclip size={20} /> Attach File
          </button>

          <Button
            variant="primary"
            shape="rounded"
            onClick={onSend}
            icon={<Send size={18} />}
            // 1.25x: Padding & Font size cho nút
            className="px-6! py-2.5! text-base! h-auto!"
          >
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

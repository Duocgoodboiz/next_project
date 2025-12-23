// src/components/wishlist/WishlistCard.tsx
import React from "react";
import Image from "next/image";
import { Star, Trash2, ShoppingCart } from "lucide-react";
import { WishlistItem } from "@/lib/types/wishlist";
import { Button } from "@/components/common/Button";
import { IconButton } from "@/components/common/IconButton";

interface WishlistCardProps {
  item: WishlistItem;
  onRemove: (id: string | number) => void;
  onAddToCart: (id: string | number) => void;
}

export const WishlistCard = ({
  item,
  onRemove,
  onAddToCart,
}: WishlistCardProps) => {
  return (
    <div
      className="
        bg-white 
        rounded-(--radius-card) 
        border border-(--erp-border) 
        shadow-(--shadow-card) 
        overflow-hidden 
        hover:shadow-lg transition-shadow 
        flex flex-col h-full relative group
      "
    >
      <div className="relative aspect-square w-full bg-(--erp-bg-body)">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges  */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {item.discount && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">
              Save ${item.discount}
            </span>
          )}
        </div>

        {/* Out of Stock  */}
        {!item.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center backdrop-blur-[1px] z-20">
            <span className="bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">
              Out of Stock
            </span>
          </div>
        )}

        <div className="absolute top-4 right-4 z-10">
          <IconButton
            variant="danger"
            className="bg-white hover:bg-red-50 border-transparent shadow-sm w-8 h-8 rounded-full flex items-center justify-center"
            icon={<Trash2 size={16} />}
            onClick={() => onRemove(item.id)}
          />
        </div>
      </div>

      {/* --- 2. CONTENT AREA --- */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3
          className="text-[20px] font-semibold text-(--erp-text-main) mb-2 line-clamp-2 leading-tight"
          title={item.name}
        >
          {item.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-(--product-meta)">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < Math.floor(item.rating)
                    ? "fill-current text-(--product-meta)"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-sm text-(--erp-text-sub) ml-1">
            ({item.reviews})
          </span>
        </div>

        {/* Price & Category */}
        <div className="flex items-center justify-between mb-4 mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-(--erp-text-main)">
              ${item.price}
            </span>
            {item.oldPrice && (
              <span className="text-sm text-(--erp-text-sub) line-through">
                ${item.oldPrice}
              </span>
            )}
          </div>
          <span className="text-xs text-(--erp-text-sub) font-medium">
            {item.category}
          </span>
        </div>

        {/* Action Button */}
        <Button
          variant="primary"
          shape="rounded"
          className={`
                w-full rounded-[14px]! h-11 font-medium text-sm
                ${
                  !item.inStock
                    ? "opacity-50 cursor-not-allowed bg-gray-400 hover:bg-gray-400"
                    : "bg-(--erp-primary) hover:bg-(--erp-button) text-white"
                }
            `}
          disabled={!item.inStock}
          onClick={() => onAddToCart(item.id)}
          icon={item.inStock ? <ShoppingCart size={18} /> : undefined}
        >
          {item.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>
    </div>
  );
};

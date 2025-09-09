import { create } from 'zustand';

// Load saved cart items from localStorage on store initialization
const getInitialItems = () => {
  const saved = localStorage.getItem("cartItems");
  return saved ? JSON.parse(saved) : [];
};

export const useCartStore = create((set, get) => ({
  items: getInitialItems(),

  addItem: (item) => {
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      let newItems;
      if (existing) {
        newItems = state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        newItems = [...state.items, { ...item, quantity: 1 }];
      }
      localStorage.setItem("cartItems", JSON.stringify(newItems));
      return { items: newItems };
    });
  },
removeItem: (id) => {
    set((state) => {
      const newItems = state.items.filter((i) => i.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(newItems));
      return { items: newItems };
    });
  },

  updateQuantity: (id, quantity) => {
    set((state) => {
      const newItems = state.items.map((i) =>
        i.id === id ? { ...i, quantity: quantity < 1 ? 1 : quantity } : i
      );
      localStorage.setItem("cartItems", JSON.stringify(newItems));
      return { items: newItems };
    });
  },

  clearCart: () => {
    localStorage.removeItem("cartItems");
    set({ items: [] });
  },
}));
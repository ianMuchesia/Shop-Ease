




//redux sidebar types
export type SidebarName = 'menu' | 'cart' | 'wish' | 'category';

export interface SidebarState {
    isOpen: boolean;
    name: SidebarName;
}


 export type SidebarsState = {
    sidebars: Record<SidebarName, SidebarState>;
    darkenBackground: boolean;
  };
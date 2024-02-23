//init zustand store

import {create} from 'zustand';
import {Website} from '../types/website';

interface Store {
    colorTheme: string;
    websiteName: string;
    searchQuery: string;
    tabpressed: boolean;
    matchedWebsite: Website | null;
    setMatchedWebsite: (website: Website | null) => void;
    setColorTheme: (color: string) => void;
    setWebsiteName: (name: string) => void;
    setSearchQuery: (query: string) => void;
    setTabPressed: (pressed: boolean) => void;

}

//create store
const useStore  = create<Store>((set) => ({
    colorTheme: "#8D9093",
    websiteName: "Enter Website",
    searchQuery: "",
    tabpressed: false,
    matchedWebsite: null,
    setMatchedWebsite: (website: Website | null) => set({ matchedWebsite: website }),
    setColorTheme: (color: string) => set({ colorTheme: color }),
    setWebsiteName: (name: string) => set({ websiteName: name }),
    setSearchQuery: (query: string) => set({ searchQuery: query }),
    setTabPressed: (pressed: boolean) => set({ tabpressed: pressed }),
}));


export default useStore;
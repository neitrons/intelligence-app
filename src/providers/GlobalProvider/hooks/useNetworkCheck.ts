import { useState, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";

export function useNetworkCheck() {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    const checkConnectivity = async () => {
      const netInfoState = await NetInfo.fetch();
      setIsConnected(
        !!(netInfoState.isConnected && netInfoState.isInternetReachable)
      );
    };

    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(!!(state.isConnected && state.isInternetReachable));
    });

    checkConnectivity();

    return () => {
      unsubscribe();
    };
  }, []);

  return { isConnected };
}

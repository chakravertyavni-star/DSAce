import { useEffect } from "react";
import { CRITICAL_ASSETS, preloadAssets } from "../utils/preloadAssets";

function AssetPreloader() {
  useEffect(() => {
    preloadAssets(CRITICAL_ASSETS);
  }, []);

  return null;
}

export default AssetPreloader;

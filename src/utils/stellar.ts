import { Server, Asset, Networks } from 'stellar-sdk';

// Initialize Stellar server (testnet for development)
export const server = new Server('https://horizon-testnet.stellar.org');

export function createAsset(code: string, issuer: string): Asset {
  return new Asset(code, issuer);
}

export async function getOrderBook(
  buyingAsset: Asset,
  sellingAsset: Asset,
  limit = 20
) {
  try {
    const orderbook = await server
      .orderbook(buyingAsset, sellingAsset)
      .limit(limit)
      .call();
    return orderbook;
  } catch (error) {
    console.error('Error fetching orderbook:', error);
    throw error;
  }
}

export async function getTradeHistory(
  baseAsset: Asset,
  counterAsset: Asset,
  limit = 20
) {
  try {
    const trades = await server
      .trades()
      .forAssetPair(baseAsset, counterAsset)
      .limit(limit)
      .order('desc')
      .call();
    return trades;
  } catch (error) {
    console.error('Error fetching trade history:', error);
    throw error;
  }
}
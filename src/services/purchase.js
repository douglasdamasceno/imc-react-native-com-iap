import RNIap, {purchaseUpdatedListener} from 'react-native-iap';

export const purchased = async (productId) => {
  let isPurchased = false;
  try {
    const purchases = await RNIap.getAvailablePurchases();
    purchases.forEach((purchase) => {
      if (purchase.productId === productId) {
        isPurchased = true;
        return;
      }
    });
    return isPurchased;
  } catch (error) {
    console.log('Erro no purchased =', error);
    return false;
  }
};

export const requestPurschase = async (productId) => {};

export const fetchAvailableProducts = async (productsIds) => {};

export const purchaseUpdateSubscription = async () => {};

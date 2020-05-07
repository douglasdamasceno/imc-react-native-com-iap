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

export const requestPurschase = async (productId) => {
  try {
    //aqui você escolhe a forma que quer receber
    await RNIap.requestSubscription(productId);
  } catch (error) {
    console.log('Erro no resquestPurschase = ', error);
  }
};

export const fetchAvailableProducts = async (productsIds) => {
  try {
    const getProducts = await RNIap.getProducts(productsIds);
  } catch (error) {
    console.log('Erro no fetchAvailableProducts = ', error);
  }
};

export const purchaseUpdateSubscription = async () => {
  purchaseUpdatedListener(async (purchase) => {
    const receipt = purchase.transactionReceipt;
    if (receipt) {
      const ackResult = await RNIap.finishTransaction(purchase);
      console.log(`ackResult = ${ackResult}`);
    }
  });
};

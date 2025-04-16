import { useState } from 'react';

function useCardInfo() {
  const [cardInfo, setCardInfo] = useState({
    firstNumber: '',
    secondNumber: '',
    thirdNumber: '',
    fourthNumber: '',
    month: '',
    year: '',
    cvc: '',
  });

  const handleCardInfo = (key: string, value: string) => {
    setCardInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return { cardInfo, handleCardInfo };
}

export default useCardInfo;

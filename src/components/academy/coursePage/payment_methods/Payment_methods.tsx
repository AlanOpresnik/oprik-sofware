import React from 'react';

const PaymentMethods = () => {
  return (
    <div className="flex justify-center text-white items-center px-16 py-10 sm:px-32 gap-4 flex-wrap border border-gray-95 rounded-lg">
      <p className="typography-body flex sm:h-10 items-center sm:border-r sm:border-gray-95 pr-6">
        Formas de pago
      </p>
      <p className="typography-body flex sm:h-10 items-center 2xl:border-r 2xl:border-gray-95 2xl:pr-6">
        Paga con tarjeta de crédito o débito
      </p>
      <img
        className="h-6 lg:h-10"
        src="https://coder-ui-static-content.coderhouse.com/ecommerce-statics/imagesV2/methods/visa.svg"
        alt="visa"
      />
      <img
        className="h-6 lg:h-10"
        src="https://coder-ui-static-content.coderhouse.com/ecommerce-statics/imagesV2/methods/master.svg"
        alt="master"
      />
      <img
        className="h-12 lg:h-20"
        src="https://www.voolkia.com/wp-content/uploads/2021/08/xmercado-pago.png.pagespeed.ic.dzWA-I2nRZ.png"
        alt="american"
      />
    </div>
  );
};

export default PaymentMethods;

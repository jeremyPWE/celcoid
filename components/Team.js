const Team = () => {
  return (
    <div className="flex flex-col items-center py-10 xl:py-20">
      <div className="flex flex-col items-center px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <h2 className="text-aqua">Frequently Asked Questions</h2>
        <div className="pt-14 text-justify">
          <h3>1. Are we a factory or a trader?</h3>
          <p className="pt-2 pb-5">
            We are a trading company of charcoal products in Indonesia, for
            coconut charcoal we collaborate with many selected manufacturers
            from Sulawesi and Java based on their product quality, delivery and
            production time, and their credibility. Hence it will reduce our
            buyers’ risk to be scammed by fake manufacturers.{" "}
          </p>
          <h3>2. Production under your brand</h3>
          <p className="pt-2 pb-5">
            {`Yes, we can do production under your brand and design ( OEM ), if
            you have your own main design you can send it to us so we can
            contact the box factory to make it for you, but if you don’t have
            any design, we can help you to make a design for your brand box. The
            price offered includes all that are stated above.`}{" "}
          </p>
          <h3>{`3. Payment terms & delivery`}</h3>
          <p className="pt-2 pb-5">
            All payments should be made via TT (Telegraph transfer) bank
            transfer to our company account in Indonesia. We use bank BCA for
            our bank account. Swift code is CENAIDJA. <br />
            Payment terms are 50% down payment. After receiving this payment we
            start production of coconut charcoal briquettes around 7-14 days and
            printing inner boxes. To load {`1×20”`} feet container we need 5
            working days. After the production process is done we are packing
            charcoal cubes into inner boxes and then to master boxes. Labeling
            boxes according to your requirements. Staffing container with
            coconut charcoal briquettes boxes takes 5-6 hours. <br />
            After container with coconut charcoal is shipped we prepare shipping
            documents: Bill of Lading, Certificate of origin, invoice, packing
            list. It takes 7 days to prepare all the documents. Right after
            that, we send you a photocopy of B/L and COO. Now is your turn to
            transfer us the rest 50% of payment. After we receive payment we
            send you original documents via DHL or just a telex release.{" "}
          </p>
          <h3>4. Quality Control</h3>
          <p className="pt-2 pb-5">
            To test coconut charcoal cubes we use Carsurin Laboratory. It is a
            certified laboratory that tests our products on ash content,
            moisture, volatile matter, and other important parameters.{" "}
          </p>
          <h3>5. Can I visit your factory?</h3>
          <p className="pt-2 pb-5">
            Yes, please come and visit our coconut charcoal factory in
            Indonesia. Let us know the date and time of your arrival and we will
            pick up you at the airport. We will provide a car and driver for
            you. Most of our first-time wholesale buyers come and visit our
            factory for the first time buy. You need to see the production
            process, our staff, packing and stuffing of container.{" "}
          </p>
          <h3>6. We Guarantee </h3>
          <p className="pt-2 pb-5">
            We are doing our best to produce coconut charcoal briquettes based
            on your specification and request. If the products that you receive
            different from the our agreement we will refund your money. We are
            always support our buyers business with our best charcoal.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;

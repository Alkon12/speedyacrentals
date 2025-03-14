const GoogleMapSection = () => {
  return (
    <div className="w-full bg-white dark:bg-black flex justify-center">
      <div className="w-full max-w-6xl h-[300px] md:mt-[-125px]">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.34172829613!2d-117.85726792373951!3d34.11200021457167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32897e268ef61%3A0x516d9b0c29c075d9!2s1504%20Bonnie%20Cove%20Ave%2C%20Glendora%2C%20CA%2091740%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1741641193915!5m2!1ses-419!2smx"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default GoogleMapSection;

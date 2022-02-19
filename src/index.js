const updateImageButton = document.getElementById("update-image-button");

const updateImage = () => {
  // ensimmäisen kuvan osoite internetissä
  const initialImageUrl =
    "https://kulkurit.fi/wp-content/uploads/2017/01/17357039_10155946905724148_387061601_o.jpg";

  // toisen kuvan osoite internetissä
  const secondImageUrl =
    "https://kulkurit.fi/wp-content/uploads/2016/03/Doraemtou5.jpg";

  // etsitään koodista päivitettävä kohta
  const imageSource = document.getElementById("introduction-image").src;

  // jos näytettävän kuvan osoite on sama kun ensimmäisen, näytetään toinen kuva
  if (imageSource === initialImageUrl) {
    document.getElementById("introduction-image").src = secondImageUrl;
    // muussa tapauksessa, näytetään ensimmäinen kuva
  } else {
    document.getElementById("introduction-image").src = initialImageUrl;
  }
};

if (updateImageButton) updateImageButton.addEventListener("click", updateImage);

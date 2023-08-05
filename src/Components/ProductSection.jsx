import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import "./ProductSection.css";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      image: "https://n9.cl/1q6sx",
      description:
        "Canasta de pino color menta con detalles de perlas celestes.",
      price: "Q150.00",
      additionalImages: ["/producto1-2.jpg", "/producto1-3.jpg"],
    },
    {
      id: 2,
      image: "https://n9.cl/ajmaq",
      description: "Canasta de pino color lila con detalles de perlas moradas.",
      price: "Q190.00",
      additionalImages: ["/producto2-1.jpg", "/producto2-2.jpg"],
    },
    {
      id: 3,
      image: "https://n9.cl/njwan",
      description: "Canasta de pino color gris con detalles de perlas cafe.",
      price: "Q120.00",
      additionalImages: ["/producto3-1.jpg", "/producto3-2.jpg"],
    },
    {
      id: 4,
      image: "https://n9.cl/0b752",
      description:
        "Canasta de pino color mixto con tonos naranja, rojo, amarillo y verde.",
      price: "Q100.00",
      additionalImages: ["/producto4-2.jpg", "/producto4-3.jpg"],
    },
    {
      id: 5,
      image: "https://n9.cl/vabyx",
      description: "Mini cesta de pino tipo picnic color negro.",
      price: "Q180.00",
      additionalImages: ["/producto5-2.jpg", "/producto5-3.jpg"],
    },
    {
      id: 6,
      image: "https://n9.cl/qa37uf",
      description: "Mini cesta de pino tipo picnic con tonos morados.",
      price: "Q180.00",
      additionalImages: ["/producto6-2.jpg", "/producto6-3.jpg"],
    },
    {
      id: 7,
      image: "https://n9.cl/x53t1",
      description: "Mini cesta de pino tipo picnic color café.",
      price: "Q170.00",
      additionalImages: ["/producto7-2.jpg", "/producto7-3.jpg"],
    },
    {
      id: 8,
      image: "https://n9.cl/74ahf",
      description:
        "Canasta de pino, incluye 2 manteles de tela dacrom con cuadros blancos y azules.",
      price: "Q500.00",
      additionalImages: ["/producto8_2.jpg", "/producto8_3.jpg"],
    },
    {
      id: 9,
      image: "https://n9.cl/geeuxj",
      description: "Canasta de pino color verde oscuro con amarillo.",
      price: "Q100.00",
      additionalImages: ["/producto8-2.jpg", "/producto8-3.jpg"],
    },
    {
      id: 10,
      image: "https://n9.cl/ljimx",
      description: "Canasta de pino color amarillo pastel.",
      price: "Q170.00",
      additionalImages: ["/producto10_2.jpg", "/producto10_3.jpg"],
    },
    {
      id: 11,
      image: "https://n9.cl/axv60",
      description: "Estilo bajo plato de pino color naranja y café.",
      price: "Q70.00",
      additionalImages: ["/producto11_2.jpg", "/producto11_3.jpg"],
    },
    {
      id: 12,
      image: "https://n9.cl/yl7fu",
      description: "Canasta tipo bowl de pino color naranja y café.",
      price: "Q100.00",
      additionalImages: ["/producto12_2.png", "/producto12_3.png"],
    },
    // Agrega más productos aquí
  ];

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenDialog = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleWhatsAppClick = (event, message) => {
    event.stopPropagation();
    const phoneNumber = '59522312'; // Reemplaza con el número de teléfono correcto
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="product-section">
      <div className="section-title">Productos</div>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="card" onClick={() => handleOpenDialog(product)}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.description}
              />
              <CardContent className="card-content">
                <Typography variant="body1" className="card-title">
                  {product.description}
                </Typography>
                <div className="container-whatsapp">
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="card-price"
                >
                  {product.price}
                </Typography>
                  <img src='/whatsapp.png' alt="WhatsApp" className="whatsapp-image"
                  onClick={(event) => handleWhatsAppClick(event,`Hola, estoy interesado/a en ${product.description} ${product.image} ¿Podrías darme más información?`)}/>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
      >
        {selectedProduct && (
          <>
            <DialogTitle>{selectedProduct.description}</DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                {selectedProduct && (
                  <>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Card>
                        <CardMedia
                          className="img-product"
                          component="img"
                          height="200"
                          image={selectedProduct.image}
                          alt={selectedProduct.description}
                          style={{ objectFit: "contain" }}
                        />
                      </Card>
                    </Grid>
                    {selectedProduct.additionalImages.map((image, index) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card>
                          <CardMedia
                            className="img-product"
                            component="img"
                            height="200"
                            image={image}
                            alt={`Imagen ${index + 1}`}
                            style={{ objectFit: "contain" }}
                          />
                        </Card>
                      </Grid>
                    ))}
                  </>
                )}
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Cerrar
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default ProductSection;

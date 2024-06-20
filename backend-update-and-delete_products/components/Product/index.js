import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import { StyledButton } from "../Button/Button.styled";
import Comments from "../Comments";
import ProductForm from "../ProductForm";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }
    mutate();
    setIsEditMode(false);
  }

  async function handleDeleteProduct(id) {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await response.json();
      router.push("/");
    } else {
      console.error(response.status);
    }
  }

  return (
    <ProductCard>
      {isEditMode ? (
        <ProductForm
          onSubmit={handleEditProduct}
          heading={"Edit Fish!"}
          initialData={data}
        />
      ) : (
        <>
          <h2>{data.name}</h2>
          <p>Description: {data.description}</p>
          <p>
            Price: {data.price} {data.currency}
          </p>
          {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
          <StyledLink href="/">Back to all</StyledLink>
        </>
      )}
      <StyledButton type="button" onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "Cancel" : "Edit"}
      </StyledButton>
      <StyledButton type="button" onClick={() => handleDeleteProduct(id)}>
        Delete
      </StyledButton>
    </ProductCard>
  );
}

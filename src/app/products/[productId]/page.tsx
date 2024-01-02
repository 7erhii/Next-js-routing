export default function DpoductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <>
      <h1>details about product {params.productId}</h1>
    </>
  );
}

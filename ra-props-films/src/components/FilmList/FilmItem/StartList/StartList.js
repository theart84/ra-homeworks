import Star from "../../../UI/Star/Star";


const StartList = (props) => {
  const quantityStars = props.count;
  if (typeof quantityStars != "number" || quantityStars < 1 && quantityStars > 5) {
    return null;
  }
  console.log(typeof quantityStars)
  const generateStars = [...Array(quantityStars).keys()].map(star => <Star key={Math.random()}/>)
  console.log(generateStars)
  return (
    <ul className="card-body-stars u-clearfix">
      {generateStars}
    </ul>
  );
}

export default StartList;

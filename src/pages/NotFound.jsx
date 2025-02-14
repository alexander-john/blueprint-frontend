import { Link } from "react-router";

export default function NotFound() {
    return (
        <div>
            <h2>Page not found!</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                nesciunt quibusdam totam perferendis. Deleniti, non atque? Ipsa
                eum amet aperiam libero quisquam, doloremque obcaecati
                consequatur, deleniti asperiores saepe quia unde.
            </p>

            <p>Go to the <Link to="/">Home</Link></p>
        </div>
    );
}

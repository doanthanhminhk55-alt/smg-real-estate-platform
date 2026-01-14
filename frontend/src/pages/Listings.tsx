import { useEffect, useState } from "react";
import { api } from "../services/api";

type Listing = {
    id: number;
    title: string;
    price: number;
};

export default function Listings() {
    const [data, setData] = useState<Listing[]>([]);

    useEffect(() => {
        api.get("/listings").then(res => setData(res.data));
    }, []);

    return (
        <div>
            <h2>Listings</h2>

            {data.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    );
}
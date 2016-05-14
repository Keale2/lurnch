import React from "react";

export default function Restaurant({website, name, map, address}) {
    return (
    <li className="restaurant"><a href={website} target="_blank">{name}</a> [<a href={map} target="_blank">{address}</a>]</li>
    );
}
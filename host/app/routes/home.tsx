import { Welcome } from "../welcome/welcome";
import React from "react";

const RemoteButton = React.lazy(() => import("remote/Button"));

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="space-y-4">
      <Welcome />
      <div className="flex justify-center">
        <React.Suspense fallback="Loading Button...">
          <RemoteButton
            variant="primary"
            onClick={() => alert("Clicked remote button!")}
          >
            Remote Button
          </RemoteButton>
        </React.Suspense>
      </div>
    </div>
  );
}

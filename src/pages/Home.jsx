import { useEffect } from "react"
import { useState } from "react"
import { BASE_URL, http } from "../shared/http"


export function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {

  }, [])
  return <div>
    <h1>home page</h1>

  </div>
}
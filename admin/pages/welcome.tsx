/** @jsxRuntime classic */
/** @jsx jsx */
import Link from 'next/link'
import React, { useState } from 'react';
import { PageContainer } from '@keystone-6/core/admin-ui/components'
import { jsx, Heading } from '@keystone-ui/core'
// Please note that while this capability is driven by Next.js's pages directory
// We do not currently support any of the auxillary methods that Next.js provides i.e. `getStaticProps`
// Presently the only export from the directory that is supported is the page component itself.

const recipesQuery = `{
  recipes {
    title
    id
    image {
      url
    }
  }
}`;

function getRecipes() {
  return fetch(window.location.origin + "/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query: recipesQuery }),
  })
    .then(r => r.json())
    .then(({ data }) => data.recipes);
}

export default function CustomPage() {
  const [recipes, setRecipes] = useState();
  getRecipes().then(recipes => setRecipes(recipes));

  return (
    <PageContainer header={<Heading type="h3">Welcome</Heading>}>
      <h1
        css={{
          width: '100%',
        }}
      >
        Herzlich Willkommen
      </h1>
      <p>
        <Link href="/recipes">Bitte klickt hier</Link> und folgt der UI um ein Rezept hinzuzufügen :)
      </p>

      <br/>
      { recipes ? <h2>Rezept im System</h2> : null }
      <ul>
        {recipes?.map((r: any) => (
          <li key={r.id}>
            <Link href={"/recipes/"+r.id}>{r.title}</Link>
            <br/>
            <img src={r.image.url} height="100px"/>
          </li>
        ))}
      </ul>
    </PageContainer>
  )
}

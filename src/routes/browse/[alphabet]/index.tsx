import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from '@builder.io/qwik-city';
import BrowseWords from "~/components/browse/browse-words";

export default component$(() => {
  const loc = useLocation();
  
  return (
    <section class="grid grid-cols-1 m-8 gap-4">
      <p class="text-3xl font-lg text-[#1d2a57] pb-4 border-dotted border-b-2">
        Words starting with 
        <span class="pl-2 font-extrabold text-sky-600">
          { loc.params.alphabet }
        </span>
      </p>
      <BrowseWords />
      
    </section>
  );
});

export const head: DocumentHead = ({ params }) => {
  return {
    title: "Phrases starting with: " + params.alphabet,
    meta: [
      {
        name: "description",
        content: "Find essential Idioms and Phrasal verbs on this app.",
      },
    ],
  }
  
};
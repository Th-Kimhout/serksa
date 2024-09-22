import React from "react";
import ReactPlayer from "react-player";
import { Accordion } from "flowbite-react";

export default function Started() {
  return (
    <>
      <div className="w-4/5 mx-auto my-10 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <ReactPlayer
          url="https://youtu.be/pYaamz6AyvU?si=sNDeBaqvdP_6ZS__"
          width="100%"
          height="100%"
          controls="true"
          muted="false"
        />
      </div>
      <div class="w-4/5 mx-auto mt-10">
        <p class="text-4xl text-primary font-bold mb-10">Playlist</p>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>Get started with Tailwind CSS</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-900 dark:text-gray-400 ">
                <ul>
                  <li>
                    <a href="" class="hover:text-secondaryHover">
                      Introduction: 20mins
                    </a>
                  </li>
                  <li>
                    <a href="" class="hover:text-secondaryHover">
                      Installation: 10mins
                    </a>
                  </li>
                  <li>
                    <a href="" class="hover:text-secondaryHover">
                      Practice: 30mins
                    </a>
                  </li>
                </ul>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Core concepts</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-900 dark:text-gray-400 ">
                <ul>
                  <li>
                    <a href="" class="hover:text-secondaryHover">
                      Utility-First Fundamentals: 20mins
                    </a>
                  </li>
                  <li>
                    <a href="" class="hover:text-secondaryHover">
                      Handling Hover, Focus, and Other States: 10mins
                    </a>
                  </li>
                  <li>
                    <a href="" class="hover:text-secondaryHover">
                      Responsive Design: 30mins
                    </a>
                  </li>
                  <li>
                    <a href="" class="hover:text-secondaryHover">
                      Dark Mode: 30mins
                    </a>
                  </li>
                </ul>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Style</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-900 dark:text-gray-400 ">
                <ul>
                  <li>
                    <a href="" class="hover:text-secondaryHover">
                      Layout: 120mins
                    </a>
                  </li>
                  <li>
                    <a href="" class="hover:text-secondaryHover">
                      Sizing and Spacing: 40mins
                    </a>
                  </li>
                  <li>
                    <a href="" class="hover:text-secondaryHover">
                      Typography: 30mins
                    </a>
                  </li>
                </ul>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  );
}

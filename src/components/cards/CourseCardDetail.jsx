import React from 'react'
import { Link} from 'react-router-dom'
import { Accordion } from "flowbite-react";
export default function CourseDetailCard({thumbnail, title, description, instructorUsername}) {
  return (
    <>
    <div class="flex flex-col md:flex-row w-4/5 mx-auto gap-2.5 mt-10 dark:bg-gray-800">
        <div class="md:w-1/2">
          <img
            class="rounded-2xl h-full w-full"
            src={thumbnail}
            alt=""
          />
        </div>

        <div class="md:w-1/2">
          <p class="text-4xl text-primary font-bold">
            {title}
          </p>
          <p class="text-lg line-clamp-3 my-2 dark:text-gray-400">
            {description}
          </p>
          <span class="text-primary bg-green-200 rounded px-4 me-2 text-lg">
            Free
          </span>
          <a href="#" class="text-lg hover:text-secondary ">
          </a>
          <br />
          <p class="text-lg inline my-2">Instructor: </p>
          <a href="#" class="text-lg inline my-2 hover:text-secondary">
            {instructorUsername}
          </a>
        <Link to="/Started">
        <button class="w-full text-white bg-primary rounded py-2 mt-2 hover:bg-primaryHover hover:text-gray-400">
            Get Started
          </button></Link>
        </div>
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

Yen Mara, [9/22/2024 8:33 PM]
</li>
                </ul>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        
      </div>
    </>
  )
}
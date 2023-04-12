---
title: "esbuild-svelte now has over 1,000 users!"
slug: "esbuild-svelte-1000"
tags: ["Computer Science", "DevOps", "Open Source", "Technology", "Programming"]
description: "Almost 3 years after the initial release, esbuild-svelte has hit 1,000+ users!"
date: 2023-04-11T21:00:34-07:00
author: "Ethan Hampton"
draft: false
---
I am very proud to announce that [`esbuild-svelte`](https://github.com/EMH333/esbuild-svelte) has over 1,000 projects depending on it to tie [Svelte](https://svelte.dev/) and [esbuild](https://esbuild.github.io/) together! This translates to over 28k downloads each month from npm. This is a huge personal achievement for me and I am very proud to be able to help people write better code in this way!

<!--more-->

{{< image src="1000.png" title="The GitHub interface showing 1,000 people depend on esbuild-svelte">}}

While most of the JS bundling hype has moved over to Vite and others, esbuild continues to be a powerful bundler. Svelte is a web framework that compiles components before they reach clients, often resulting in quicker and leaner code than would otherwise be possible. By bringing esbuild and Svelte together, `esbuild-svelte` allows developers to combine two of the most efficient tools available to web developers.

## Obsidian

One of the reasons why I think my project has been used so much is because the template for [Obsidian](https://obsidian.md/) (a locally-hosted notes management software) plugins uses esbuild. This means that if anyone wants to use Svelte, they use my project so they don't have to ripe out the existing esbuild bundling.

While the actual core Obsidian software is closed-source, there is a vibrant open source plugin community. And even if Obsidian were to go away, the data format is markdown, so that's easy to transfer to another program.

I'm actually using Obsidian to write part of this post so it feels unreal that my code is powering parts of that experience. Being an Open Source enthusiast, it's a feeling I absolutely crave.

## Dependents

GitHub has [a powerful tool](https://github.com/EMH333/esbuild-svelte/network/dependents) that allows you to see which repositories are depending on your code. This is how I was able to determine the project hit 1,000 users. I selected a few cool and semi-popular projects who depend on `esbuild-svelte` to feature below. All of these (at the time of publication) use `esbuild-svelte` in some way critical to their deployment and/or development process.

Applications:

- https://github.com/ankitects/anki
- https://github.com/FlamingTempura/bibtex-tidy
- https://github.com/varbhat/exatorrent
- https://github.com/hensm/fx_cast
- https://github.com/beancount/fava
- https://github.com/wailsapp/wails

Svelte Specific:

- https://github.com/vikignt/svelte-mui
- https://github.com/AlexxNB/tinro

Obsidian Plugins:

- https://github.com/vrtmrz/obsidian-livesync
- https://github.com/obsidian-tasks-group/obsidian-tasks
- https://github.com/denolehov/obsidian-git

Between just the ones I've listed here, these projects share over 40.5k stars on GitHub. There are many other impressive projects left off this list. It is absolutely amazing to me that my project plays a role in the development of all these other projects!

## History
In the summer of 2020, I saw that esbuild had added support for plugins to do custom processing for different file types. I immediately thought of the Svelte framework. I really enjoy working with Svelte because it compiles down it's components at build time which means it is able to do a lot of optimizations and make other changes most other frameworks can't.

Looking at the esbuild plugin documentation, I saw that Evan Wallace (creator of esbuild) had already written a demo plugin that used the Svelte compiler to bundle svelte files. I was able to take that initial code and adapt it to work slightly better. After some tweaks, I was able to publish an initial version to npm.

Over the last three years, 252 commits, and 31 releases, contributors (there have been five other than myself) have fixed countless bugs and made significant improvements. This has taught me a lot about managing an Open Source project and how to develop within the JavaScript ecosystem. I have been really impressed by the small community that has surrounded the project. Just having those couple people sometimes respond to issues or create PRs makes a huge difference in the maintenance burden.

## To the Future!

There is still more to do! Svelte continues to be developed, and SvelteKit released version 1.0 not too long ago. In the coming months I plan to do the following:

- Adapt esbuild-svelte to esbuild 0.17

  One of the breaking changes esbuild 0.17.0 introduced was changing the way incremental and watch mode building worked. This took away one of the options esbuild-svelte uses to determine whether to cache compiled files to speed up rebuild times. I need to work with esbuild to either re-add that option or find an alternative so large projects are able to build faster again without manually enabling the option.

- Hot Module Reloading (HMR)

  This one is a stretch, but esbuild 0.17 also added support for the basics of HMR. This would mean adding a dependency to esbuild-svelte and slightly more complexity, but I think it would pay off in developer experience improvements. I'm still on the lookout for a plugin or system that adds support for HMR to the core of esbuild.

- Better source maps

  Right now, Svelte preprocessors make it difficult to figure out where an error or warning is coming from when looking at the source maps for files. I have the fix for this already done, but I need to flush out a few more bugs before I can release it.

## Conclusion

This is a very exciting milestone for me! One of the things I hear over and over again online is how important your first 1,000 users are. In the bundler/framework plumbing space things are a little different, but I still think this is an important milestone to celebrate and draw attention to. Especially since this is my first, hopefully of many, "1,000 users".
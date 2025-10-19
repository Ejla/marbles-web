---
layout: post
title: "Why Client-Side Encryption Matters"
excerpt: "In a world where most online tools hold the keys to your personal data, Marbles gives you full control. Learn how client-side encryption works and why your thoughts can finally stay truly private."
---

One thing that everyone nowadays needs to be aware of - the internet is not a safe place.

We like to think our data is safe because we use “secure” apps, but in truth, anything stored online can be at risk. Big companies get hacked, smaller services cut corners, and human error can happen anywhere. Even if your data is encrypted on a company’s servers, it often means *they* hold the keys - not you.

That’s why I’ve become a bit more cautious (some might say paranoid) about where my personal notes and thoughts go. It’s not that I have state secrets to hide - it’s just that our private moments, reflections, and personal struggles deserve respect. I think we all want a space where we can be honest without wondering if some algorithm or database breach might one day expose it.

The reality is, most online tools prioritize convenience and connectivity over true privacy. They sync your data, back it up, analyze it “for your benefit” - but in doing so, they also hold control over it. And as users, we’ve learned to trade that control for usability because, well, what’s the alternative?

That’s exactly the gap I wanted to fill with Marbles - a space that’s still convenient, still cloud-based, but where **you** stay in control of your data.


## How client-side encryption works

This is going to get a bit technical, but I’ll try to explain how client-side encryption works - and why Marbles is safer than most online tools today.

In most online apps, when you type something, it gets sent to the server as readable text. The server might then encrypt it - but since the server itself did the encryption, it also holds the key to decrypt it. This is what’s called **server-side encryption**. It’s good for protecting data from outsiders, but not from the service provider itself. In theory, anyone with access to the system - a developer, an admin, or a hacker who gains access - could still read your notes.

**Client-side encryption**, which Marbles uses, flips that around. Your device does the encryption *before* the data ever leaves your computer or phone. The encryption key - basically your secret password or PIN - never leaves your device. The text that travels over the internet and gets stored in the database is already encrypted, meaning it’s just random, unreadable characters.

Even if someone were to access the database or intercept your traffic, what they’d get would look like nonsense. And since only your personal encryption PIN can unlock it - something Marbles never stores or even sees - no one, not even I as the creator, can decrypt your data.

To put it simply:  
- With most tools, you trust the company not to look.  
- With Marbles, it’s **mathematically impossible** for the company to look.

This kind of encryption is the same principle used by secure messaging apps and password managers. It’s more complex to build and maintain, but it’s the only way I personally feel comfortable storing private thoughts online.


## Why privacy matters for creativity and self-reflection

When we feel truly safe - when we know our thoughts, ideas, and emotions won’t be seen or judged - we can be more honest with ourselves. That’s where growth begins. Whether you’re journaling through a rough patch, brainstorming a dream project, or just trying to organize your day, feeling secure in your digital space matters.

That’s what Marbles is about. It’s not about locking yourself away from the world - it’s about creating a quiet, trusted corner of it. A place where you can think freely, without worrying who’s watching. Because privacy isn’t just a technical feature - it’s the foundation of self-expression.

Client-side encryption keeps your data private and secure, but it comes with some trade-offs: encrypted notes aren’t searchable, and if you forget your PIN, they can become permanently inaccessible. Learn how you can address these challenges [in the next article &rarr;]({% link _posts/2025-10-19-challenges-of-client-side-encryption.md %})

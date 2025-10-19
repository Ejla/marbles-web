---
layout: post
title: "The Honest Side of Privacy: Challenges of Client-Side Encryption"
excerpt: "Client-side encryption keeps your data private, but it comes with trade-offs - from remembering your encryption key to limited search functionality. Here’s what you need to know, and how Marbles helps you navigate these challenges safely."
---

In the [&larr; previous post]({% link _posts/2025-10-15-why-client-side-encryption-matters.md %}), I talked about how client-side encryption works and why it makes Marbles a safer space for your private thoughts. But as with most things, there’s another side to the story - the part that’s a bit less glamorous but equally important to understand.

Client-side encryption gives you full control over your data, but that control also comes with responsibility. So in this article, I want to talk about the **downsides** - the real-world challenges that come with protecting your privacy - and the simple ways you can manage them.

## The Danger of Forgetting Your Encryption PIN

This is the big one.  
When you encrypt a notebook in Marbles, your data is locked with a key (**your encryption PIN**) that only you know. That key is never stored anywhere - not on our servers, not in your browser, not in a secret backup file. It lives only in your memory (or wherever you choose to store it).

That’s what makes it so secure - but it also means that if you forget it, there is **no way** to recover the data. There’s no “Forgot password?” button. The encrypted notes are essentially random characters without your key.

I know that sounds scary, but the solution is pretty simple:

- Store your PIN safely in a **password manager** (like Bitwarden, 1Password, or even your phone’s secure notes).  
- Write it down on paper and keep it somewhere private if you prefer old-school backups.  
- Choose a PIN that’s **personally meaningful but known only to you** - something tied to a memory or pattern you’ll easily recall, but that others couldn’t guess.  
- Don’t reuse a password you use elsewhere - this PIN protects your private thoughts, not your email.

It’s all about balance: keep it safe, but keep it accessible to *you*.


## Backups - The “Just in Case” Safety Net

Marbles lets you **export your notebooks and journals** in different formats depending on your needs:

- **JSON:** This is how Marbles stores your data internally. It’s encrypted and formatted for the app, so it’s great if you want to back up or move your notebooks to another Marbles account. I strongly recommend doing a **manual backup** every now and then. That way, if something unexpected happens (you accidentally delete something, your device crashes, or you just want peace of mind), you can easily restore everything from your exported file by **importing it back into Marbles**. 
- **PDF or Markdown (MD):** These formats export the **decrypted, human-readable version** of your notes. PDFs are perfect for sharing or printing, while Markdown keeps your text flexible for editing in any Markdown editor.  

This flexibility means your thoughts are never locked away in a proprietary system. Even if you decide to stop using Marbles, you can still carry your content with you, readable and usable anywhere.



## The Search Limitation

Here’s another tricky part.  
Since encrypted data is stored as unreadable text, the system can’t “look inside” to search for keywords. That means full-text search within encrypted notebooks isn’t possible - at least not without decrypting everything first, which would defeat the whole purpose of client-side encryption.

There are some experimental ways to make “searchable encryption,” but they either compromise privacy or make everything painfully slow. For now, I prefer not to pretend that this problem is solved. It’s a compromise - one that keeps your data truly private.

That said, Marbles does offer **tagging** as a way to organize and find things later. You can add tags like ``#garden``, ``#journal``, or ``#project-ideas``, and quickly filter notes by topic. It’s not quite the same as full search, but it’s a lightweight and private way to keep your notes structured and easy to browse.


## Privacy Is Never Free - But It’s Worth It

True privacy in digital tools always comes with a price. Sometimes it’s convenience, sometimes it’s the comfort of knowing there’s a “reset” button.

But I believe the trade-off is worth it.  
Client-side encryption means no one - not me, not a system admin, not an algorithm - can peek into your private thoughts. And with a few good habits like storing your PIN safely, backing up regularly, and tagging your notes, you can have both **privacy and peace of mind**.

Because in the end, Marbles isn’t about being perfect or feature-packed. It’s about creating a space you can trust - even when the rest of the internet feels a bit too crowded and noisy.

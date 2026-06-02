# Troubleshooting & FAQ

## ❓ Frequently Asked Questions

### Installation & Setup

**Q: I get "Cannot find module" errors after `npm install`**

A: Try clearing npm cache and reinstalling:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

**Q: What Node.js version do I need?**

A: Node.js 16+ recommended, 18+ preferred. Check your version:
```bash
node --version
```

If outdated, download from [nodejs.org](https://nodejs.org/)

---

**Q: Do I need to create all the folders manually?**

A: No! The file creation tools automatically create directories. Just run:
```bash
npm install
npm run dev
```

---

### Running Locally

**Q: I get "EADDRINUSE: address already in use :::3000"**

A: Port 3000 is already in use. Kill the process or use a different port:
```bash
# Find process on port 3000
lsof -i :3000

# Kill it
kill -9 <PID>

# Or use different port
npm run dev -- -p 3001
```

---

**Q: Form doesn't show when I visit /internships/apply**

A: Check:
1. Dev server running (`npm run dev` shows no errors)
2. Visit exactly: `http://localhost:3000/internships/apply` (not `/Internships` or `/apply`)
3. Check browser console for JavaScript errors
4. Verify file exists: `src/app/internships/apply/page.tsx`

---

**Q: Tracks aren't loading from API**

A: This is normal! The app uses `FALLBACK_TRACKS` if API fails. You'll see 8 default tracks (Mobile, Frontend, Backend, etc.). This is by design for offline resilience.

To use real API:
1. Update `NEXT_PUBLIC_API_BASE_URL` in `.env.local`
2. Restart dev server: `npm run dev`
3. Check browser DevTools → Network tab for API calls

---

### Form Issues

**Q: Form data disappears after page refresh**

A: The app uses `sessionStorage` which clears when browser closes. This is intentional. To test persistence:
1. Fill out form
2. Refresh page (Ctrl+R)
3. Form should still have data
4. Close browser completely
5. Reopen - data should be gone

This is the correct behavior.

---

**Q: Validation isn't working - I can advance with empty fields**

A: Make sure:
1. You're filling ALL required fields
2. Current step has no error messages (shown below fields)
3. Next button isn't disabled
4. Check browser console for validation errors

Required fields per step:
- Step 1: Track
- Step 2: Full Name, Email, Phone, DOB, Gender, District
- Step 3: Institution, Field, Year, Experience, at least 1 skill
- Step 4: Motivation (100+ chars), How you heard about us
- Step 5: CV file required
- Step 6: Consent checkbox

---

**Q: File upload shows error "File too large"**

A: Maximum file size is 5MB. Check your CV file size:
```bash
ls -lh path/to/file.pdf
```

If > 5MB, compress it or use a smaller CV.

Allowed formats: `.pdf`, `.doc`, `.docx`

---

**Q: Special characters in form fields cause errors**

A: This shouldn't happen! All inputs are sanitized. If you see errors:
1. Take screenshot
2. Check browser console
3. Report with the exact text you entered

---

### API & Submission

**Q: Form won't submit - just shows spinner forever**

A: The submit button may be stuck. Check:
1. Browser console for errors
2. Network tab (DevTools) - is request sending?
3. API endpoint reachable? Test with:
   ```bash
   curl https://study.afritechbridge.online/api/v1/internships/tracks
   ```

If API not responding, update your API URL in `.env.local`

---

**Q: I get "CORS error" when submitting**

A: Your API doesn't have CORS enabled. The API server needs to:
1. Allow requests from your domain
2. Allow Content-Type multipart/form-data
3. Allow POST method

Ask your backend team to enable CORS or contact them with this:
```
CORS Request Headers needed:
- Origin: your-domain.com
- Content-Type: multipart/form-data
- Access-Control-Allow-Origin: * (or your domain)
```

---

**Q: Submission succeeds but no reference code appears**

A: Check API response. It should return:
```json
{
  "success": true,
  "reference_code": "ATB-1234567890-ABC",
  "message": "Application submitted successfully"
}
```

If not, your API response format may be different. Update in `src/api/internship.ts`:

```typescript
export const submitApplication = async (formData: FormData) => {
  // Update to match your API response
  return response.data; // Adjust based on your API
};
```

---

### Styling & UI

**Q: Animations look jerky/stuttering on my PC**

A: GPU acceleration may not be enabled. Try:
1. Update graphics drivers
2. Use Chrome (better animation support than Firefox)
3. Reduce particle count in `PageBackground.tsx`:
   ```typescript
   const particleCount = 10; // Reduce from 20
   ```

---

**Q: Colors look different than in the mockup**

A: Check `.env.local` and verify `NEXT_PUBLIC_API_BASE_URL`. Theme colors are defined in `src/app/globals.css`:

```css
:root {
  --navy: #1a2d5a;
  --teal: #1ab3a8;
  --orange: #f47c20;
}
```

To customize, edit these CSS variables.

---

**Q: Form doesn't look right on mobile**

A: Check:
1. Mobile viewport enabled (DevTools → Toggle Device Toolbar)
2. Viewport meta tag present (should be in layout.tsx)
3. Try different screen sizes: 375px (iPhone), 768px (iPad), 414px (iPhone+)

If still broken, check for console errors with mobile view.

---

### TypeScript & Build

**Q: I get TypeScript errors**

A: Make sure all imports are correct. Example:
```typescript
// ✅ Correct
import { GlowInput } from '@/components/internship/ui';

// ❌ Wrong
import GlowInput from '@/components/internship/ui/GlowInput';
```

Run type check:
```bash
npx tsc --noEmit
```

---

**Q: Build succeeds locally but fails on Vercel/hosting**

A: Usually environment variables issue. Check:
1. `.env.example` matches what you set on hosting platform
2. `NEXT_PUBLIC_` prefix for public variables
3. No secrets in environment variables
4. Build command is: `npm run build`
5. Start command is: `npm start`

---

### Performance

**Q: My form is really slow**

A: Check:
1. Network speed (DevTools → Network throttle)
2. API response time (may be slow backend)
3. Number of particles (reduce in PageBackground)
4. Browser extensions (try incognito mode)

Run Lighthouse:
```bash
# In Chrome DevTools → Lighthouse tab
# Run "Mobile" and "Desktop" reports
```

---

**Q: Animations are laggy on lower-end devices**

A: The form detects screen size and reduces animations on mobile. For older devices:
1. Reduce particles in PageBackground.tsx (from 20 to 5)
2. Disable confetti on success
3. Simplify Framer Motion animations
4. Test on actual device (Chrome DevTools throttling isn't exact)

---

## 🐛 Common Bugs & Solutions

### Bug: Form stuck on Step 0 after submission

**Symptom**: Form won't advance after selecting track

**Solution**:
```typescript
// Check TrackSelector.tsx - make sure onSelect calls:
onSelect={() => {
  setValue('track_slug', track.slug); // Store value
  methods.trigger('track_slug');       // Trigger validation
  setTimeout(() => goNext(), 100);     // Advance
}}
```

---

### Bug: Session storage not working

**Symptom**: Form data disappears on refresh

**Root Cause**: 
- Private browsing mode
- sessionStorage disabled
- Browser not supporting it

**Solution**: 
- Test in normal mode (not private/incognito)
- Add fallback to localStorage if needed:

```typescript
// In useInternshipForm.ts
const storage = typeof window !== 'undefined' 
  ? sessionStorage // Try sessionStorage
  : null;
```

---

### Bug: CV file validation always fails

**Symptom**: "Invalid file format" even for .pdf files

**Root Cause**: MIME type check or file extension

**Solution**: Check DropZone.tsx accepts list:
```typescript
accept={{
  'application/pdf': ['.pdf'],
  'application/msword': ['.doc'],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
}}
```

---

### Bug: Error messages don't disappear

**Symptom**: Red error text stays even after fixing the field

**Solution**: React Hook Form manages errors. Check:
1. Field is properly connected with `{...field}`
2. No manual error state conflicts
3. Clear form state on new input:

```typescript
// In GlowInput.tsx
<input
  onChange={(e) => {
    field.onChange(e);
    // Trigger revalidation
  }}
/>
```

---

### Bug: "Reference code not showing" after submit

**Symptom**: Success page shows but no reference code

**Root Cause**: API response doesn't include reference_code

**Solution**:
1. Check API response format in browser DevTools
2. Update parsing in submitApplication:

```typescript
const { reference_code, ref_code, referenceCode } = response.data;
return reference_code || ref_code || referenceCode;
```

---

### Bug: Can't upload large CV files

**Symptom**: "Request too large" error

**Root Cause**: 
- File > 5MB
- Server payload limit too small
- Network timeout

**Solution**:
1. Compress CV to < 5MB
2. If self-hosted, increase server limit:

```javascript
// next.config.js
module.exports = {
  api: {
    bodyParser: {
      sizeLimit: '50mb', // Increase limit
    },
  },
};
```

---

## 🔧 Advanced Troubleshooting

### Check Network Requests

```javascript
// In browser DevTools Console
// Monitor all API calls
window.addEventListener('fetch', (e) => {
  console.log('API:', e.request.url);
});

// Or check XMLHttpRequest
const originalXHR = window.XMLHttpRequest;
const XHRPrototype = originalXHR.prototype;
const originalOpen = XHRPrototype.open;

XHRPrototype.open = function(method, url) {
  console.log(`${method} ${url}`);
  return originalOpen.apply(this, arguments);
};
```

---

### Debug Form State

```javascript
// In browser console, check stored form data
const saved = JSON.parse(sessionStorage.getItem('internship_form_state'));
console.log('Saved form data:', saved);
console.log('Current step:', saved.step);
console.log('Form data:', saved.formData);
```

---

### Check CSS Loading

```javascript
// Verify CSS is loaded
const styles = document.styleSheets;
console.log('Stylesheets loaded:', styles.length);

// Check for Tailwind classes
console.log('Tailwind classes available:', document.documentElement.style);
```

---

### Monitor React Renders

```javascript
// Add to page.tsx temporarily to track renders
console.log('Page rendered'); // Logs every render

// Use React DevTools browser extension for visual debugging
// Extension: React Developer Tools
```

---

## 📋 Debugging Checklist

When something doesn't work:

- [ ] Check browser console (F12 → Console tab)
- [ ] Check Network tab (F12 → Network)
- [ ] Verify API endpoint is reachable
- [ ] Check .env.local has correct values
- [ ] Restart dev server (`npm run dev`)
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Try different browser (Chrome, Firefox, Safari)
- [ ] Test on different screen size (mobile emulation)
- [ ] Disable browser extensions
- [ ] Check `node_modules` exists and isn't corrupted

---

## 🆘 Emergency Contacts

If you need to report a bug or get help:

1. **Check this guide first** (you're reading it!)
2. **Check browser console** for error messages
3. **Google the error message** (usually solves 80% of issues)
4. **Search GitHub Issues** for similar problems
5. **Contact support team** with:
   - Exact error message (screenshot)
   - Steps to reproduce
   - Browser version
   - Device/OS
   - Screenshots/video

---

## ✅ Testing Your Setup

Run this checklist to verify everything works:

```bash
# 1. Check Node version
node --version  # Should be 16+

# 2. Install dependencies
npm install

# 3. Build the project
npm run build  # Should succeed

# 4. Start dev server
npm run dev  # Should start on port 3000

# 5. Test API fallback
curl https://study.afritechbridge.online/api/v1/internships/tracks

# 6. Visit in browser
open http://localhost:3000/internships/apply

# 7. Test form
# - Fill Step 1 (track)
# - Fill Step 2 (personal)
# - Verify data persists on page refresh
# - Try submitting form
# - Check reference code on success
```

If all ✅ pass, your setup is ready!

---

## 💡 Pro Tips

1. **Use DevTools React Component Tab** to inspect component state
2. **Use Network Tab** to monitor API calls in real-time
3. **Use Console Tab** to run JavaScript commands for debugging
4. **Check Page Source** to verify HTML structure is correct
5. **Use Lighthouse** (Chrome) to check performance

---

## 📞 Still Stuck?

If you've tried everything:

1. **Take a screenshot** of the error/issue
2. **Copy the console error** message
3. **Note your Node version** and OS
4. **Contact support** with all the above information

They can help much faster with detailed information!

---

**Remember**: Most issues are solved by:
1. Restarting dev server
2. Clearing cache/node_modules
3. Checking .env configuration
4. Reloading browser page

Try these three things first! 🚀

---

**Last Updated**: June 2, 2025  
**Status**: ✅ Complete & Tested

import "./_group.css";

type EntryFormPreviewProps = { light?: boolean };

export function EntryFormPreview({ light = false }: EntryFormPreviewProps) {
  return (
    <main className={`entry-preview${light ? " entry-preview--light" : ""}`}>
      <div className="ep-app">
        <div className="ep-backdrop">
          <span className="ep-backdrop-mark">PK</span>
          <span>Portfolio content / Projects</span>
        </div>
        <section className="ep-drawer" aria-label="Add project form">
          <header className="ep-header">
            <span className="ep-eyebrow">Projects / New record</span>
            <h1>Add project</h1>
            <p>Complete the fields below. Your changes appear on the public portfolio after saving.</p>
          </header>
          <form className="ep-form">
            <div className="ep-form-scroll">
              <div className="ep-field">
                <label htmlFor="preview-title">Title *</label>
                <input id="preview-title" placeholder="e.g. Customer Churn Analysis" />
              </div>
              <div className="ep-field">
                <label htmlFor="preview-slug">Slug *</label>
                <input id="preview-slug" placeholder="customer-churn-analysis" />
                <p className="ep-hint">Generated from the title; used in /projects/slug</p>
              </div>
              <div className="ep-field">
                <label htmlFor="preview-category">Category</label>
                <select id="preview-category" defaultValue="Data Science">
                  <option>Data Science</option>
                  <option>Data Analytics</option>
                  <option>AI/ML</option>
                  <option>Full-Stack</option>
                </select>
              </div>
              <div className="ep-field is-wide">
                <label htmlFor="preview-description">Short description *</label>
                <textarea id="preview-description" rows={3} placeholder="A short summary of the project" />
              </div>
              <div className="ep-field is-wide">
                <label htmlFor="preview-overview">Long description / overview</label>
                <textarea id="preview-overview" rows={3} placeholder="Describe the project in more detail" />
              </div>
              <div className="ep-field">
                <label>Features</label>
                <div className="ep-tags"><span className="ep-tag">Add a feature…</span></div>
              </div>
              <div className="ep-field">
                <label>Technologies</label>
                <div className="ep-tags"><span className="ep-tag">Add a technology…</span></div>
              </div>
              <div className="ep-field">
                <label htmlFor="preview-github">GitHub URL</label>
                <input id="preview-github" placeholder="https://github.com/…" />
              </div>
              <div className="ep-field">
                <label htmlFor="preview-live">Live URL</label>
                <input id="preview-live" placeholder="https://…" />
              </div>
              <div className="ep-featured">
                <span className="ep-switch" aria-hidden="true" />
                <div className="ep-featured-copy">
                  <label>Show on home page</label>
                  <p>0/3 featured. Turn one off before adding another to the home page preview.</p>
                </div>
              </div>
            </div>
            <footer className="ep-footer">
              <button className="ep-submit" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>
                Add project
              </button>
            </footer>
          </form>
        </section>
      </div>
    </main>
  );
}

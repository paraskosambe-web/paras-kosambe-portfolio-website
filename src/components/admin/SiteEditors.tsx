function Pending({ title }: { title: string }) {
  return <section><div className="admin-head"><div><span className="admin-eyebrow">Manage</span><h1>{title}</h1></div></div><p className="text-muted-foreground">This editor is not built yet.</p></section>;
}
export const AboutEditor = () => <Pending title="About" />;
export const SocialLinksEditor = () => <Pending title="Social Links" />;
export const SettingsEditor = () => <Pending title="Settings" />;

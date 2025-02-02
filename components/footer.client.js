import { useMemo } from "react"
import { useAppContext } from "./AppContext"

export default function Footer() {
  const { mounted } = useAppContext()
  useMemo(() => {
    console.log('Footer:mounted', { mounted, hasWindow: typeof window !== "undefined" })
  }, [mounted])
  return (
    <div>
      <footer className="footer">
        Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC |
        Contact
      </footer>

      <style
        dangerouslySetInnerHTML={{
          __html: `
      .footer {
        padding: 10px 0 40px;
        color: #ccc;
        font-size: 14px;
        text-align: center;
        border-top: 1px solid;
        margin-top: 50px;
      }
    `,
        }}
      />
    </div>
  )
}

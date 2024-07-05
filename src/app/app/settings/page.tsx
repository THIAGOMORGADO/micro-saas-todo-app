import { DashBoardPage, DashBoardPageHeader, DashBoardPageHeaderTitle, DashBoardPageMain } from "@/components/dashboard/page"
import { auth } from "@/services/auth"



export default function Page() {

  return (
    <DashBoardPage>
      <DashBoardPageHeader>
        <DashBoardPageHeaderTitle>Configuraçoes</DashBoardPageHeaderTitle>
      </DashBoardPageHeader>

      <DashBoardPageMain>
        <h1>Configuraçoes</h1>
      </DashBoardPageMain>
    </DashBoardPage>
  )
}
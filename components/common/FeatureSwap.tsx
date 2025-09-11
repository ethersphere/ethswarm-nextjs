import dynamic from 'next/dynamic'
import { useState, useEffect, FC } from 'react'
import { CowSwapWidgetParams, CowSwapWidgetPalette } from '@cowprotocol/widget-react'

// Dynamically import the CowProtocol widget with SSR disabled
const CowSwapWidget = dynamic(
  () => import('@cowprotocol/widget-react').then(mod => ({ default: mod.CowSwapWidget })),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center p-8 bg-[#1F2831]/70 rounded-lg h-[550px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F28B0A] mx-auto mb-4"></div>
          <p className="text-[#F6F7F9]">Loading Swap Widget...</p>
        </div>
      </div>
    )
  }
)

const BZZ_ON_ETH = '0xdBF3Ea6F5beE45c02255B2c26a16F300502F68da'

interface Props {
  className?: string
}

const FeatureSwap: FC<Props> = ({ className }) => {
  const [mounted, setMounted] = useState(false)

  const theme: CowSwapWidgetPalette = {
    baseTheme: 'dark',
    primary: '#F28B0A',
    paper: '#25313C',
    text: '#F6F7F9',
    background: '#1F2831',
    success: '#4CAF50',
    warning: '#FF9800',
    danger: '#F44336',
    alert: '#FFC107',
    info: '#2196F3',
  }

  const params: CowSwapWidgetParams = {
    appCode: 'Swarm',
    width: '100%',
    height: '550px',
    chainId: 1,
    tokenLists: [
      'https://unpkg.com/@traderjoe-xyz/token-lists/build/traderjoe.tokenlist.json',
      'https://raw.githubusercontent.com/paraswap/community-token-list/master/src/sources/paraswap.extralist.json',
    ],
    sell: {
      asset: 'ETH',
      amount: '1',
    },
    buy: {
      asset: BZZ_ON_ETH,
      amount: '',
    },
    enabledTradeTypes: [],
    theme,
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show loading state until client-side hydration is complete
  if (!mounted) {
    return (
      <div className={className}>
        <div className="border border-[#2D3843] rounded-xl overflow-hidden bg-[#1F2831]/70 pb-5">
          <div className="flex items-center justify-center p-8 h-[550px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F28B0A] mx-auto mb-4"></div>
              <p className="text-[#F6F7F9]">Loading Swap Widget...</p>
            </div>
          </div>
          <div className="text-[13px] text-[#F6F7F9]/40 px-4 max-w-lg mx-auto">
            Please note that the quoting system in CowSwap is in beta and may not
            provide accurate predictions. To determine the exact final price, you
            must proceed to the trade execution screen.
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="border border-[#2D3843] rounded-xl overflow-hidden bg-[#1F2831]/70 pb-5">
        <CowSwapWidget params={params} />
        <div className="text-[13px] text-[#F6F7F9]/40 px-4 max-w-lg mx-auto">
          Please note that the quoting system in CowSwap is in beta and may not
          provide accurate predictions. To determine the exact final price, you
          must proceed to the trade execution screen.
        </div>
      </div>
    </div>
  )
}

export default FeatureSwap

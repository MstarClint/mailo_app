"use client";

import React from 'react'
import { Button } from '@/components/ui/button'
import { getAurinkoAuthorizationUrl } from '@/lib/aurinko'

const LinkAccountButton = () => {
    return (
        <Button onClick={async () => {
            const authUrl = await getAurinkoAuthorizationUrl('Google')
            window.location.href = authUrl;
        }}>
            Link Account
        </Button>

    )
}

export default LinkAccountButton
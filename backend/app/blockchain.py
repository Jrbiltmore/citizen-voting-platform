# Blockchain integration for the Citizen Voting Platform

import json
from web3 import Web3
from .config import BLOCKCHAIN_CONFIG

# Initialize web3 connection
web3 = Web3(Web3.HTTPProvider(BLOCKCHAIN_CONFIG['provider']))

def deploy_contract(contract_interface):
    tx_hash = web3.eth.contract(
        abi=contract_interface['abi'],
        bytecode=contract_interface['bytecode']
    ).constructor().transact()
    tx_receipt = web3.eth.waitForTransactionReceipt(tx_hash)
    return tx_receipt.contractAddress

def record_vote_on_chain(vote_data):
    # Assuming vote_data is a dictionary containing vote details
    tx_hash = web3.eth.contract(
        address=BLOCKCHAIN_CONFIG['contract_address'],
        abi=BLOCKCHAIN_CONFIG['contract_abi']
    ).functions.recordVote(
        vote_data['user_id'],
        vote_data['bill_id'],
        vote_data['choice']
    ).transact()
    tx_receipt = web3.eth.waitForTransactionReceipt(tx_hash)
    return tx_receipt
